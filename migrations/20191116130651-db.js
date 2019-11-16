module.exports = {
  async up(db, client) {
    
    await db.collection('quotes').updateOne({ quotes: "Do It Now" }, { $set:{ quotes:"Do It Now"} });
  },

  async down(db, client) {

    await db.collection('quotes').updateOne({ quotes: "Do It Now" }, { $set:{ quotes:"work hard"} });
  }
};