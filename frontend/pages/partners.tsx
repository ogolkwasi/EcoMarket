
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router"; 





export default function ProgramPartner() {
  const router = useRouter(); 

 
  const handleGoToMenu = () => {
    router.push("/menu");
  };

  return (
    <>
/
   
      <div className={styles.box_acc}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "60%" }}></div>
        <h1 className="text-2xl-semi text-gry-900" style={{ fontSize: 30 }}>Program Partners</h1>
        &nbsp;


        <div >
        <a href="https://ethglobal.com/events/newyork2023" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "65px", height: "65px" }}
          src="./ethglobal.jpg"
          alt="ethglobal-superhack"
        />
      </a>
        </div>
        &nbsp;

        <div >
        <a href="https://chain.link/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./chainlink.png"
          alt="Chainlink"
        />
      </a>
       
        &nbsp;
      
        <a href="https://www.optimism.io/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./WalletConnect.png"
          alt="WalletConnect"
        />
      </a>
      &nbsp;
      
      <a href="https://www.covalenthq.com/" target={"_blank"}>
      <img
        id="badge-button"
        style={{ width: "180px", height: "75px" }}
        src="./arbitrum.jpg"
        alt="arbitrum"
      />
    </a>
        </div>
        &nbsp;
        <div >
        <a href="https://worldcoin.org/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./Celo.jpg"
          alt="Celo"
        />
      </a>
       
        &nbsp;
      
        <a href="https://thegraph.com/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./xmtp.png"
          alt="xmtp"
        />
      </a>
      &nbsp;
      
      <a href="https://attest.sh/" target={"_blank"}>
      <img
        id="badge-button"
        style={{ width: "180px", height: "75px" }}
        src="./MetaMask.jpg"
        alt="MetaMask"
      />
    </a>
        </div>
        &nbsp;
        <div >
        <a href="https://www.mode.network/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./alchemy.jpg"
          alt="alchemy"
        />
      </a>
       
        &nbsp;
      
        <a href="https://zora.co/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./6551.jpg"
          alt="6551"
        />
      </a>
      <a href="https://base.org/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./IPFS.png"
          alt="IPFS"
        />
      </a>
        </div>
        &nbsp;
        <div >
        
        <a href="https://www.hyperlane.xyz/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./airstack.png"
          alt="airstack"
        />
      </a>
      &nbsp;

      <a href="https://safe.global/" target={"_blank"}>
        <img
          id="badge-button"
          style={{ width: "180px", height: "75px" }}
          src="./Axelar.jpg"
          alt="Axelar"
        />
      </a>
       
       
      &nbsp;
      
      <a href="https://layerzero.network/" target={"_blank"}>
      <img
        id="badge-button"
        style={{ width: "180px", height: "75px" }}
        src="./QuickNode.jpg"
        alt="QuickNode"
      />
    </a>
        </div>
      </div>
      &nbsp;
      &nbsp;
      
    /
    </>
  );
}
