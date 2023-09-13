import React from 'react';
import Link from 'next/link';

import { GITHUB_API, GITHUB_USER } from 'constants/github';

import { IRepoContent } from 'share/interfaces/repo';

async function fetchRepoContents(name: string): Promise<IRepoContent[]> {
  const res = await fetch(`${GITHUB_API}/repos/${GITHUB_USER}/${name}/contents`, {
    next: {
      revalidate: 60, // 60sec
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

const RepoDirs = async ({ name }: { name: string }): Promise<React.JSX.Element> => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content: IRepoContent) => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: IRepoContent) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
