exports.seed = function (knex, Promise) {
  //Deletes All existing entries
  return knex('datas').del().then(() => {
    //Inserts seed entries
    return knex('datas').insert({
        id:'1',
        bond:'597786',
        equities: '41730',
        fx: '1602986',
        fxoptions: '224784',
        swaps: '4143',
      },
  );
  })
  .then(() => {
    return knex.raw("SELECT setval('datas_id_seq', (SELECT MAX(id) FROM datas));");
  });
};
