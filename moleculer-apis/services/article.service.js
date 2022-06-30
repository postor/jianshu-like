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
  adapter: new MongoDBAdapter(process.env.MONGODB || "mongodb://192.168.5.43/jianshu-like"),
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
        updated: 'number',
        words: 'number',
        reads: 'number'
      },
      /** @param {Context} ctx  */
      async handler(ctx) {
        return await this.actions.create(ctx.params);
      }
    },
    withAuthor: {
      rest: "/withAuthor",
      params: {
        id: 'string',
      },
      /** @param {Context} ctx  */
      async handler(ctx) {
        console.log(this.methods)
        let article = await ctx.call('article.get', { id: ctx.params.id });
        let author = article.authorid
          ? await ctx.call('user.get', { id: article.authorid })
          : {
            name: 'sample user',
            image: '/images/writer-default.webp',
            words: 10244,
            likes: 40964,
          }

        return { article, author }
      }
    },
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
      let content = new Array(50)
        .fill('content content content content content content content content ')
        .join(' ')
      let sample = {
        title: 'title title title title title title title title title ',
        desc: 'desc desc desc desc desc desc desc desc desc desc desc desc .....',
        author: 'author',
        rating: 60.6,
        comments: 93,
        like: 47,
        paid: 23,
        content,
        image: '/images/article-card-default.jpg',
        updated: 0,
        words: 1024,
        reads: 1024,
      }
      let updated = new Date().getTime()

      for (let i = 0; i < 50; i++) {
        updated -= 86400000
        await this.actions.validCreate({
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
