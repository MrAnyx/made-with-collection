import simpleIcons from "../node_modules/simple-icons/index";

let MadeWith = {};

MadeWith.enable = () => {
   let github = simpleIcons.Get("github");
   console.log(github);
};

module.export = MadeWith;