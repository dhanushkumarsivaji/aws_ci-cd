module.exports = {
  async up(db) {
    
    await db.collection('quotes').updateOne({ quotes: "work hard" }, { $set:{ quotes:"Life is not an easy task"} });
  },

  async down(db) {

    await db.collection('quotes').updateOne({ quotes: "You are born to win" }, { $set:{ quotes:"work hard"} });
  }
};