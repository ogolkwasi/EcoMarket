import styles from "../styles/instructionsComponent.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header_container}>
        <div className={styles.header}>
          <h1>
            <span>
              Carbon
              <i>
                <b>
                  <u>Soko</u>
                </b>
              </i>
            </span>
          </h1>
          <h3>CarbonCredits: Trading a Greener Future</h3>
          <div className={styles.container_top}>
            <div className={styles.container_chat}>
              <h2>
                Carbon Credit Investments Surpass $36B, But $90B Gap Looms for
                2030 Climate Targets
              </h2>
              <img src="/Carbon-Credit.png" width={"500px"} height={"350px"} />

              <p>
                A report by Trove Research revealed that there’s a total of $36
                billion invested in carbon credit projects from 2012 to 2022,
                accelerating with more than $18 billion raised in the last 2.5
                years. But global efforts are still short of $90 billion to meet
                the 2030 carbon reduction targets.
              </p>

              <p>
                Investments in developing carbon credit projects are an
                important market signal indicating levels of corporate climate
                action.{" "}
              </p>

              <p>
                However excessive criticism of quality may deter companies from
                engaging in their voluntary commitment to support carbon
                credits. This, in turn, may undermine critical voluntary climate
                actions from large companies.{" "}
              </p>

              <p>
                {" "}
                The new commitment will deliver over a thousand new carbon
                projects, ranging from forest protection to carbon capture and
                storage solutions. It will also provide a growing supply of
                carbon credits that companies can use for their net zero
                strategies.
              </p>

              <p>
                {" "}
                Trove Research is a leader in delivering data and intelligence
                on voluntary carbon market (VCM) and corporate climate pledges.
              </p>

              <h3>Carbon Credit Investments Reach $36 Billion</h3>

              <p>
                {" "}
                The report also analyzed capital invested in 7,000+ carbon
                credit projects from 2012 to 2022. Around $36 billion has been
                invested over this period, with $17 billion in 2021-2023 and
                $7.5 billion of this investment in 2022 alone.
              </p>
            </div>

            <div className={styles.widget_card}>
              <h2> See how much carbon dioxide </h2>
              <h2>you are emitting by using the calculator</h2>
              <co2nsensus-widget
                widget-id="e670acab-4249-4118-9b16-8bba4a04e1bf"
                className="co2nsensus-widget.light"
              ></co2nsensus-widget>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
