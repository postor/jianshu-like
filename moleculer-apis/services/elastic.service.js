"use strict";
const ESService = require('moleculer-elasticsearch')


/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
  name: "elastic",

  mixins: [ESService],
  settings: {
    elasticsearch: {
      host: process.env.ELASTIC_SEARCH || "http://192.168.5.43:9200",
      apiVersion: '7.x',
    }
  },


  /**
   * Dependencies
   */
  dependencies: [],

  /**
   * Actions
   */
  actions: {

    /**
     * list articles
     *
     * @returns
     */
    articles: {
      rest: "articles",
      params: {
        before: "number",
        limit: "number"
      },
      async handler(ctx) {
        return new Array(Math.max(ctx.params.limit, 20)).fill({
          title: 'title',
          desc: 'desc desc desc desc desc desc desc desc desc desc desc desc .....',
          author: 'author',
          rating: 60.6,
          comments: 93,
          like: 47,
          paid: 23,
        });
      }
    },

    /**
     * Welcome, a username
     *
     * @param {String} name - User name
     */
    welcome: {
      rest: "/welcome",
      params: {
        name: "string"
      },
      /** @param {Context} ctx  */
      async handler(ctx) {
        return `Welcome, ${ctx.params.name}`;
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

  },

  /**
   * Service stopped lifecycle event handler
   */
  async stopped() {

  }
};
