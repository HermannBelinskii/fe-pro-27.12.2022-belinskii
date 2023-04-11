import styles from './Main.module.scss'

export default function Main (props){
    return (
        <div className={styles.main}>
            <h1 className={styles.main__header}>{props.title}</h1>
            <p className={ styles.main__text }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ad tempora omnis fugiat eligendi! Quia ea nam temporibus, atque nobis tempore voluptas recusandae mollitia quo inventore voluptatum accusantium dicta natus eius magnam sed? Maxime in, ea debitis tenetur blanditiis dignissimos! Explicabo laboriosam exercitationem sed mollitia. Quidem neque vitae fuga consequuntur nemo, necessitatibus odit optio nam quisquam minima fugiat, est id mollitia? Animi fugiat explicabo, illum ipsa adipisci culpa nihil autem consequatur deserunt voluptate? Voluptates eligendi quam et blanditiis corporis molestias suscipit unde inventore sequi quaerat! Molestias aliquam alias, temporibus dolores cum accusamus quos nulla dignissimos fugit illo voluptatum voluptas illum ab ad! Provident tempora, iste nostrum quaerat suscipit dolorum cupiditate dolorem vero, rem a obcaecati illum quod eos quam sunt autem dolores blanditiis ullam. Voluptate inventore consequuntur nobis error temporibus debitis hic officia omnis quaerat veniam aliquid sit, nulla dolore cumque! Doloremque, ipsa laboriosam. In commodi sint ratione ducimus, modi pariatur, sunt debitis nesciunt mollitia nam illo? Veniam, numquam quibusdam?</p>
        </div>
    )
}