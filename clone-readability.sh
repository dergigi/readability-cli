#!/bin/bash
rm -rfv readability
git clone https://github.com/mozilla/readability.git
rm -rfv readability/.git
git add readability
git commit -m "Update readability from github"
