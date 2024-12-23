import { Check } from "@/assets/check";
import styles from "./loan-compare.module.scss";
import type { LoanCompare_component } from "@sanity-types";
import Markdown from "../markdown";

const LoanCompare = (data: LoanCompare_component) => {
  return (
    <section className={styles["loan-compare"]}>
      <div className="container">
        <Markdown.h2>{data.title}</Markdown.h2>
        <div className={styles["flex"]}>
          <div className={styles["compare-block"]}>
            <Markdown.h3>{data.compare_block_title}</Markdown.h3>
            {data.compare_block_annotation ? (
              <Markdown>{data.compare_block_annotation}</Markdown>
            ) : null}
          </div>
          <ul>
            {data.list?.map((el, index) => (
              <li key={el + index}>
                <Check />
                {el}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LoanCompare;
