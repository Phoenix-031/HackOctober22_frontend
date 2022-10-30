import { React } from "react";
import { verify } from "../../api/api.auth";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const VerifyUser = () => {
  const params = useParams();

  useEffect(() => {
    const verifyEmailCall = async () => {
      await verify(params.token);
    };

    verifyEmailCall();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-white p-14 rounded-md flex justify-center items-center gap-4 flex-col">
      <div>
        <i className="rounded-full w-40 h-40 bg-gray-200 flex justify-center items-center font-extrabold text-5xl text-green-600">
          ✓
        </i>
      </div>
      <h1 className="font-semibold text-green-600 text-3xl font-nunito">Success</h1>
      <div>
        <p className="font-semibold text-ver1 text-xl">
          Your email has been successfully verified!
          <br />
          You can now close this page!
        </p>
      </div>
    </div>
  );
};

export default VerifyUser;
