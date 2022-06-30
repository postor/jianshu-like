"use strict";
const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
  name: "user",
  settings: {},
  dependencies: [],
  mixins: [DbService],
  adapter: new MongoDBAdapter(process.env.MONGODB || "mongodb://192.168.5.43/jianshu-like"),
  collection: "users",
  actions: {

    random: {
      rest: 'random',
      handler: async function () {
        let client = this.adapter.client
        const db = client.db("jianshu-like")
        const coll = db.collection("users")
        return await coll.aggregate([{ $sample: { size: 10 } }]).toArray()
      }
    }
  },

  /**
   * Events
   */
  events: {

  },

  /**
   * Methods
   */
  methods: {

  },

  /**
   * Service created lifecycle event handler
   */
  created() {

  },

  /**
   * Service started lifecycle event handler
   */
  async started() {
    let list = await this.actions.list();
    if (0 === list.total) {
      let sample = {
        name: 'user name',
        image: '/images/writer-default.webp',
        words: 10244,
        likes: 40964,
      }

      for (let i = 0; i < 50; i++) {
        await this.actions.create({
          ...sample,
          name: `user${i} name`
        })
      }

    }
  },

  /**
   * Service stopped lifecycle event handler
   */
  async stopped() {

  }
};
