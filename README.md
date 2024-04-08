# Ethereon
Angular app with a variety of features.

Step 1:
Clone the repository with the following command in VS Code Terminal:
$ git clone https://github.com/smithbh1/ethereon
OR
gh repo clone https://github.com/smithbh1/ethereon (if using github CLI)

Step 2:
Change your working directory to the name of the repository (etherion in this case)
$cd etherion

Step 3:
Create and check out branch to make changes on
$ git branch BRANCH-NAME
$ git checkout BRANCH-NAME

Step 4:
Make sure all items in node_modules are successfully imported locally since the .gitignore file removes this from the repository. This will prevent errors when attempting to deploy the code locally to test.

Step 5:
Once you are done making changes to the file(s)-
 1. Check to make sure there aren't any changes that haven't been saved to your local version
    $ git checkout main
    $ git pull https://github.com/smithbh1/ethereon.git main
 3. Manage merge conflicts and commit them
 4. push changes
    git add .
    git commit -m "description of change(s) made"
    git push

