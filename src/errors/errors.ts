class FORBIDDEN extends Error {
  constructor() {
    super("FORBIDDEN");
    this.name = "FORBIDDEN";
    this.message = "Не верный idInstance или apiTokenInstance";
  }
}

const ERRORS = {
  FORBIDDEN: "403",
};

export { ERRORS, FORBIDDEN };
