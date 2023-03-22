module.exports = {
  beforeCreate(event) {
    event.params.data.slug =
      event.params.data.title.replace(/[^0-9a-z]/gi, "") +
      `_${event.params.data.date.toString()}`;
  },
};
