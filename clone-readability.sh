#!/bin/bash
rm -rfv readability
git clone https://github.com/mozilla/readability.git
rm -rf readability/.git
git add readability
git commit -m "Update readability from github"
