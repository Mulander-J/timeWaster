<template lang="pug">
.catWrapper
    .cat.center
        .body
            .content.font-bad: slot
        .head
            .eyes
                .eye.left
                .eye.right
            .ear.left
            .ear.right
        .tail
            .tail
                .tail
                    .tail
                        .tail
                            .tail
</template>

<style scoped lang="scss">
.catWrapper * {
    position: absolute;
    box-sizing: inherit;
    transition: all .38s ease-in-out;
}

.catWrapper {
    --black: #222;
    --white: #fff;
    position: relative;
    min-height: 100px;
    min-width: 200px;
    box-sizing: border-box;
    cursor: pointer;

    .center {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .x-center {
        left: 50%;
        transform: translateX(-50%);
    }

    .y-center {
        top: 50%;
        transform: translateY(-50%);
    }

    .cat {
        width: 100px;
        height: 100px;
        display: block;
    }

    .body {
        width: 85%;
        height: 60%;
        background-color: var(--black);
        border-radius: 50% 10% 50% 40%/60% 5% 65% 50%;
        right: 0;
        bottom: 0;
    }

    .body .content {
        color: var(--white);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .head {
        width: 60%;
        height: 50%;
        background-color: var(--black);
        border-radius: 50% 50% 30% 30% /60% 60% 30% 30%;
        right: 0;
        top: 10%;
    }

    .eyes {
        height: 5%;
        width: 50%;
        top: 45%;
        right: 15%;
    }

    .eye {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: var(--white);
        animation: eye-move 3s none infinite;
    }

    .eye.left {
        left: 0;
    }

    .eye.right {
        right: 0;
    }

    .ear {
        width: 0;
        height: 0;
        border-color: transparent transparent var(--black);
        border-style: solid;
    }

    .ear.left {
        border-width: 0 7px 10px 7px;
        left: 15%;
        bottom: 90%;
        transform: rotate(-30deg);
    }

    .ear.right {
        border-width: 0 10px 15px 10px;
        right: 5%;
        bottom: 85%;
        transform: rotate(30deg);
    }

    .cat>.tail {
        height: 18%;
        width: 50%;
        background-color: var(--black);
        bottom: 0;
        right: 35%;
        border-radius: 50%/250%;
    }

    .cat>.tail>.tail {
        right: 90%;
    }

    .tail>.tail {
        height: 100%;
        transform-origin: center right;
        transform: rotate(0deg);
        width: 25px;
        right: 26%;
        animation: tail 2s none infinite;
        border-top-left-radius: 50% 50%;
        border-bottom-left-radius: 50% 50%;
        background-color: var(--black);
    }
}

.catWrapper:hover {
    --black: #fefefe;
    --white: #222;
}

.catWrapper:hover .body .content {
    right: -200%;
    font-size: 150%;
}




@keyframes tail {
    5% {
        transform: rotate(0);
    }

    50% {
        transform: rotate(10deg);
    }

    70%,
    100% {
        transform: rotate(0);
    }
}

@keyframes eye-move {
    0% {
        transform: scaleY(1);
    }

    5% {
        transform: scaleY(0);
    }

    10%,
    100% {
        transform: scaleY(1);
    }
}</style>