import {useEffect} from "react";
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import anime from "animejs";

// .add({
//     targets: battery,
//     charged: '100%',
//     cycles: 130,
//     easing: 'linear',
//     update: function () {
//         document.querySelector('.battery-log').innerHTML = JSON.stringify(battery)
//     }
// })

export default function Home() {
    useEffect(() => {
        var battery = {
            charged: '0%',
            cycles: 120
        }

        anime({
            targets: '.circle',
            translateX: 0,
            scale: 2,
            easing: 'easeInOutCubic',
            borderRadius: ['0%', '50%'],
            loop: true
        })
    }, [])

    return (
        <Layout title={"Homepage"}>
            <div className={styles.custom_container}>
                <h1>Welcome to anim studio</h1>
                <div className={styles.circle + ` circle`}></div>
                <div className={"battery-log"} style={{marginTop: '48px'}}>{`"charged":"0%", "cycles":130`}</div>
                <div className={"We have to take it to another place honestly ... "}></div>
            </div>
        </Layout>
    )
}
