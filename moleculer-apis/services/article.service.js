"use strict";
const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
  name: "article",
  settings: {},
  dependencies: [],
  mixins: [DbService],
  adapter: new MongoDBAdapter("mongodb://192.168.5.43/jianshu-like"),
  collection: "articles",
  actions: {
    /**
     * create with type validation
     */
    validCreate: {
      rest: "/validCreate",
      params: {
        title: 'string',
        desc: 'string',
        author: 'string',
        rating: 'number',
        comments: 'number',
        like: 'number',
        paid: 'number',
        content: 'string',
        image: 'string',
        updated: 'number'
      },
      /** @param {Context} ctx  */
      async handler(ctx) {
        return await this.actions.create(ctx.params);
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
        title: 'title title title title title title title title title ',
        desc: 'desc desc desc desc desc desc desc desc desc desc desc desc .....',
        author: 'author',
        rating: 60.6,
        comments: 93,
        like: 47,
        paid: 23,
        content: 'content content content content content content content content ',
        image: '/images/article-card-default.jpg',
        updated: 0
      }
      let updated = new Date().getTime()

      for (let i = 0; i < 50; i++) {
        updated -= 86400000
        await this.actions.create({
          ...sample,
          updated
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
