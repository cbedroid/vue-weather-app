/**
 * TEZ Custom github script
 *
 *  * script to use in package.json
 *  * node g.js real update message
 *   Youtube Video: https://www.youtube.com/watch?v=-SaZiADGLHs
 *   Credit: Steve Griffith
 *    */

const { exec } = require("child_process");
let args = process.argv;
args.splice(0, 2);
let str = args.join(" ");

console.log(str);

/*
 *	Github Add Message
 */
async function callback(err, stdout, stdin) {
  if (err) {
    console.log(err.message);
    return;
  }
  //it worked
  return true;
}

async function gitPush() {
  /* Staging Git Files */
  if (!exec(" git add .", callback)) {
    console.log("-- Error adding files");
    return;
  }

  /* Adding Git Message */
  if (!exec(` sudo git commit -m "${str}"`, callback)) {
    console.log("-- Commit messages failed");
    return;
  }

  /* Pushing TO Github */

  // First get current branch
  let branch = exec(
    ` git branch | grep "*" | sed -e 's,*,,g'`,
    (err, stdout, stdin) => {
      if (err) {
        console.log(err.message);
        console.log("-- Error: Cant find your Git branch! \n", stdout);
        return;
      }
      return stdout;
    }
  );

  // Push the commit to GitHub
  if (branch) console.log("\n\n***BRANCH **\n\n", branch);
  /*
		* if(branch){
	  exec(` git push origin ${branch}`, (err,stdout,stdin)=>{
		if (err) {
			console.log(`-- Error There was a problem pushing to branch: ${branch} !`);
			console.log(err.message);
			return;
		}
		console.log('-- Committed Successfully\n',stdout);
		});
	}
	*/
}

gitPush();
