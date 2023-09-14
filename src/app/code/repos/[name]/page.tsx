import React, { Suspense } from "react";

import Link from "next/link";

import { IRepo } from "share/interfaces/repo";

import Repo from "components/Repo";
import RepoDirs from "components/RepoDirs";

const RepoPage = ({
  params: { name },
}: {
  params: IRepo;
}): React.JSX.Element => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repository...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
