module.exports = {
  async up(db) {
    
    await db.collection('quotes').updateOne({ quotes: "Do It Now" }, { $set:{ quotes:"checking log files"} });
  },

  async down(db) {

    await db.collection('quotes').updateOne({ quotes: "Do It Now" }, { $set:{ quotes:"work hard"} });
  }
};