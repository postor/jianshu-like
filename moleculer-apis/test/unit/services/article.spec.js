"use strict";

const { ServiceBroker } = require("moleculer");
const { ValidationError } = require("moleculer").Errors;
const TestService = require("../../../services/article.service");

describe("Test 'article' service", () => {
  let broker = new ServiceBroker({ logger: false });
  broker.createService(TestService);

  beforeAll(() => broker.start());
  afterAll(() => broker.stop());

  describe("Test 'article.validCreate' action", () => {

    it("should add and remove successfully'", async () => {
      let res = await broker.call("article.validCreate", {
        title: 'title',
        desc: 'desc desc desc desc desc desc desc desc desc desc desc desc .....',
        author: 'author',
        rating: 60.6,
        comments: 93,
        like: 47,
        paid: 23,
        content: 'content content content content content content content content ',
        image: '/images/test.png',
      });

      expect(res).not.toBeFalsy();
      res = await broker.call("article.remove", { id: res._id })
      expect(res).not.toBeFalsy();

    });


    it("should reject an ValidationError", async () => {
      expect.assertions(1);
      try {
        await broker.call("article.validCreate", {
          title: 'title',
        });
      } catch (err) {
        expect(err).toBeInstanceOf(ValidationError);
      }
    });

  });

});

