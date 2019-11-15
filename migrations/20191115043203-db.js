module.exports = {
  async up(db, client) {
    
    await db.collection('quotes').updateOne({ quotes: "Day One or One Day, You Decide !!" }, { $set:{ quotes:"Do It Now !!!"} });
  },

  async down(db, client) {

    await db.collection('quotes').updateOne({ quotes: "Do It Now !!!" }, { $set:{ quotes:"Day One or One Day, You Decide !!!"} });
  }
};
