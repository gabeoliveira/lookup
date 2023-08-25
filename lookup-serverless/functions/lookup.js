const _ = require('lodash');
const td = require('tinyduration');

/**
 *  Lookup - validate a phone number
 *
 *  This function will tell you whether or not a phone number is valid using Twilio's Lookup API
 *
 *  Parameters:
 *  "phone" - string - phone number in E.164 format (https://www.twilio.com/docs/glossary/what-e164)
 */



exports.handler = async function (context, event, callback) {

  const response = new Twilio.Response();
  response.appendHeader('Content-Type', 'application/json');
  response.appendHeader('Access-Control-Allow-Origin', '*');
  response.appendHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.appendHeader('Access-Control-Allow-Headers', 'Content-Type');
   

  try {
    if (event.phone === '' || typeof event.phone === 'undefined') {
      throw new Error('Missing parameter; please provide a phone number.');
    }

    console.log(event);

    const data = _.omit(event, 'phone', 'request', !event.fields && 'fields');

    const client = context.getTwilioClient();

    const resp = await client.lookups.v2
      .phoneNumbers(event.phone)
      .fetch({ ...data });

    if(resp.simSwap && resp.simSwap.last_sim_swap.swapped_period){
      
      const swappedPeriod = td.parse(resp.simSwap.last_sim_swap.swapped_period);
      let swappedPeriodString = '';
      Object.keys(swappedPeriod)
        .forEach(key => swappedPeriodString += `${swappedPeriod[key]} ${key}`);

      resp.simSwap.last_sim_swap.swapped_period = swappedPeriodString; 
    }

    console.log(resp);
    
    response.setStatusCode(200);
    response.setBody(resp);
    return callback(null, response);
  } catch (error) {
    console.error(error.message);
    response.setStatusCode(error.status || 400);
    response.setBody({ error: error.message });
    return callback(null, response);
  }
};
