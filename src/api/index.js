const Airtable = require('airtable');
const base = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASE_ID);

const orderTable = base('OrderList');
const table2 = base('MemberList');

const minifyRecords = (records) => {
  console.log(records);
  return records.map((record) => {
    console.log(record);
    return {
      id: record.id,
      fields: record.fields,
    };
  });
};

export { orderTable, table2, minifyRecords };
