import React from "react";

import { FaEye, FaStar, FaCodeBranch } from "react-icons/fa";

import { GITHUB_API, GITHUB_USER } from "constants/github";

import { IRepo } from "share/interfaces/repo";

async function fetchRepo(name: string): Promise<IRepo> {
  const res = await fetch(`${GITHUB_API}/repos/${GITHUB_USER}/${name}`, {
    next: {
      revalidate: 60, // 60sec
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Repo = async ({ name }: { name: string }): Promise<React.JSX.Element> => {
  const repo = await fetchRepo(name);

  return (
    <>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div className="card-stats">
        <div className="card-stat">
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className="card-stat">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className="card-stat">
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>
    </>
  );
};

export default Repo;
