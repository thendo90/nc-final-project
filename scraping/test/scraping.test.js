const assert = require("chai").assert;
const expect = require("chai").expect;
const fs = require("fs/promises");

describe("gameScraper", () => {
  it("writes a json file as an array of objects", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scrapedData/gameScrape.json`)
    );

    assert.typeOf(file, "array");
    file.forEach((entry) => {
      assert.typeOf(entry, "object");
    });
  });
  it("each object in the array has keys of title, imgUrl, url, price, platform", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scrapedData/gameScrape.json`)
    );

    file.forEach((entry) => {
      assert.property(entry, "title");
      assert.property(entry, "url");
      assert.property(entry, "imgUrl");
      assert.property(entry, "price");
      assert.property(entry, "platform");
    });
  });
  it("each platform key only has values of PS5, Xbox seriesX, or Nintendo Switch", async () => {
    const file = JSON.parse(
      await fs.readFile(`${__dirname}/../scrapedData/gameScrape.json`)
    );

    file.forEach((entry) => {
      expect(["PS5", "Xbox SeriesX", "Nintendo Switch"]).to.include(
        entry.platform
      );
    });
  });
  it("should ", () => {});
});
