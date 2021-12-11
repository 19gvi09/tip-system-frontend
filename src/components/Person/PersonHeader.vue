<template>
<div class="wrapper">
    <div class="row">
        <div class="main_background">
            <div class="greetings">
                <p>Привет,</p>
            </div>
            <div class="user-name">
                <p>Иван Ковальников</p>
            </div>
            <div class="user-id">
                <p><span>Твой</span> <b>Forta id:</b> 7685 7588 4758</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "PersonHeader"
}
</script>

<style lang="scss" scoped>
@include respond-to("xs") {
    $padding-x: 25px !global;
    $gutter: 20px !global;
    $total-cols: 3 !global;
}

@include respond-to("md") {
    $padding-x: 30px !global;
    $gutter: 20px !global;
    $total-cols: 3 !global;
}

.row {
    display: flex;
    align-items: center;
    justify-content: space-between;

}

.wrapper {
    padding: 20px $padding-x;
    display: flex;
    align-items: center;
    background: radial-gradient(98.89% 173.8% at 5.07% 16.39%, #E0E4FB 0%, #AAA3F5 100%);
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.05);
}

.main_background {
    display: block;
    flex-direction: column;
        height: 281px;

    /* sh2_arrow */

}

.user-name {
    width: calc((100vw - 3 * $padding-x + $gutter) / $total-cols * 2 - $gutter);
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 43px;

    /* DiForta_style/white1 */

    color: #FFFFFF;

}

.greetings {
    text-align: left;
    width: calc((100vw - 1 * $padding-x + $gutter) / $total-cols * 2 - $gutter);
    font-family: Lato, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #FFFFFF;
}

.user-id {
    p {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;

    }

    b {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }

    span {
        font-family: Lato, sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
    }
}
</style>
