import express, { Express, Request, Response } from "express";

async function postLogin(request: Request, response: Response) {
  let { email, password } = request.body;
  // let user = new User(email, password);
  //let authen = user.login();
  //     if (authen)
  //         response.json({
  //             complete: authen,
  //             status
  //             data:user
  //         });
  // }
}
export let authController = {
  postLogin,
};
