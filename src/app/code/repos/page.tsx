import React from 'react';

import Link from 'next/link';
import { FaEye, FaStar, FaCodeBranch } from 'react-icons/fa';

import { GITHUB_API, GITHUB_USER } from 'constants/github';

import { IRepo } from 'share/interfaces/repo';

async function fetchRepos(): Promise<IRepo[]> {
  const res = await fetch(`${GITHUB_API}/users/${GITHUB_USER}/repos`, {
    next: {
      revalidate: 60, // 60sec
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const ReposPage = async (): Promise<React.JSX.Element> => {
  const repos = await fetchRepos();

  return (
    <>
      <div className="repos-container">
        <h2>Repositories</h2>
        <ul className="repo-list">
          {repos.map((repo: IRepo) => (
            <li key={repo.id}>
              <Link href={`/code/repos/${repo.name}`}>
                <h3>{repo.name}</h3>
                <p>{repo.description}</p>
                <div className="repo-details">
                  <span>
                    <FaStar /> {repo.stargazers_count}
                  </span>
                  <span>
                    <FaCodeBranch /> {repo.forks_count}
                  </span>
                  <span>
                    <FaEye /> {repo.watchers_count}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ReposPage;
