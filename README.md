# Deptt of Mathematics and Computing Website

This repository will contain the source code for the official website of department of Mathematics and Computing

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Your machine should have Npm(or Yarn) and Node.js installed to use it locally.

## Setup and Installation

### Setting up the repository locally

1. First fork the repo :fork_and_knife: to your account.  
   Go to the forked repo and clone it :busts_in_silhouette: to your local machine:

```sh
git clone https://github.com/Grumpyyash/Deptt_of_MnC_Website.git
```

This will make a copy of the code to your local machine.

2. Now move to the `Deptt_of_MnC_Website` directory.

```sh
cd Deptt_of_MnC_Website
```

3. Now check the remote of your local code by:

```sh
git remote -v
```

The response should look like:

```sh
origin	https://github.com/Your_Username/Deptt_of_MnC_Website.git (fetch)
origin	https://github.com/Your_Username/Deptt_of_MnC_Website.git  (push)
```

To add upstream to remote, run:

```sh
git remote add upstream https://github.com/Grumpyyash/Deptt_of_MnC_Website.git
```

Again run `git remote -v`, the response should look like:

```sh
origin	https://github.com/Your_Username/Deptt_of_MnC_Website.git  (fetch)
origin	https://github.com/Your_Username/Deptt_of_MnC_Website.git  (push)
upstream	https://github.com/Grumpyyash/Deptt_of_MnC_Website.git (fetch)
upstream	https://github.com/Grumpyyash/Deptt_of_MnC_Website.git (push)
```

4. Once the remote is set, go to the `mnc_website` subdirectory, install all the necessary dependencies by the following command:

```sh
npm i
```

### Run locally

Run the below command to start the server:

```sh
npm run dev
```
Go to: [http://localhost:3000](http://localhost:3000)