module.exports = {
  async up(db) {
    
    await db.collection('quotes').updateOne({ quotes: "work hard" }, { $set:{ quotes:"checking log files"} });
  },

  async down(db) {

    await db.collection('quotes').updateOne({ quotes: "checking log files" }, { $set:{ quotes:"work hard"} });
  }
};