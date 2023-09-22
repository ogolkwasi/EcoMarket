import { useCallback, useState } from "react";
import Dropzone, { useDropzone, DropzoneRootProps } from "react-dropzone";
import styl from "../styles/Card.module.css";

export default function UploadFile() {
  const [uris, setUris] = useState<string[]>([]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    try {
      const formData = new FormData();
      formData.append("file", acceptedFiles[0]);
  
      // Determine the content type based on the file extension
      const contentType = acceptedFiles[0].type;
  
      const response = await fetch("https://api.nft.storage/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYxZTY4YUQ4MEUzNzMyQ0JlZjNGZDEzRDZFOTIzMGM4MGFEN0FjNjAiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY5Mzg2NTcwNDEwNywibmFtZSI6IkVjb21hcmtldCJ9.Mq7J0jjea54VNyQBrYyur4hrqx0i2lLzAqDU-kLBM7g`,
          // Set the content type based on the file's type
          'Content-Type': contentType,
        },
        body: formData,
      });
  
      if (response.ok) {
        const data = await response.json();
        const cid = data.value.cid;
        console.log("Uploaded with CID:", `https://dweb.link/ipfs/${cid}`);
        setUris((prevUris) => [...prevUris, `https://dweb.link/ipfs/${cid}`]);
      } else {
        console.error("Error uploading to NFT.Storage:", response.statusText);
      }
    } catch (error) {
      console.error("Error uploading to NFT.Storage:", error);
    }
  }, []);
  

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <div {...(getRootProps() as DropzoneRootProps)}>
        <input {...getInputProps()} />
        <button className={styl.btn_outline}>Drop your logo.png here to upload</button>
      </div>
      <div>
        {uris.map((uri) => (
          <img key={uri} src={uri} alt="Image" width="350px" />
        ))}
      </div>
      {uris && (
              <p>Picture CID: {uris}</p>
              )}
    </div>
  );
}
