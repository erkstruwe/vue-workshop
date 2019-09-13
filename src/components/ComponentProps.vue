<template>
    <div>
        <h1>Component props</h1>

        <h2>Info</h2>
        <p>String values can be passed down using regular HTML attributes or data bound values.</p>
        <FancyAlert msg="FUBAR" type="danger"></FancyAlert>
        <FancyAlert :msg="message" type="success"></FancyAlert>

        <h3>Default values</h3>
        <p>Components can define default values for props.</p>
        <FancyAlert msg="Hi"></FancyAlert>

        <h3>Validation</h3>
        <p>You should validate props (e. g. their data type). In case of a mismatch, you'll see an error in the
            JavaScript console.</p>
        <FancyAlert :msg="number"></FancyAlert>
        <FancyAlert msg="Hi" type="nyan"></FancyAlert>

        <h3>Value binding</h3>
        <p>Data types other than string can be passed using the <code>v-bind</code> directive to make Vue.js treat them
            as a JavaScript expression.</p>
        <FancyAlert msg="Hi" :prefix="false"></FancyAlert>

        <h3>Attribute inheritance</h3>
        <p>Non-prop attributes are <a href="https://vuejs.org/v2/guide/components-props.html#Non-Prop-Attributes">inherited</a>
            by the child component's root element. This behavior can be <a
                href="https://vuejs.org/v2/guide/components-props.html#Disabling-Attribute-Inheritance">disabled</a> for
            special use cases.</p>
        <FancyAlert msg="Hi" id="component-props-attribute-inheritance" class="text-uppercase"></FancyAlert>

        <h3>One-way data binding</h3>
        <p>Props form a one-way data binding from the parent to the child. Not the other way around. They behave like
            AngularJS's <code>"&lt;"</code>-style binding, not like the <code>"="</code>-style one. In order to change
            the parent's value, child components can trigger custom events.</p>

        <h2>Exercise</h2>
        <div class="card-deck">
            <FancyCard></FancyCard>
            <FancyCard></FancyCard>
        </div>
    </div>
</template>

<script>
    import FancyAlert from "./FancyAlert"
    import FancyCard from "./FancyCard"

    export default {
        components: {
            FancyAlert,
            FancyCard,
        },
        data() {
            return {
                nestedHtml: "<template>\n\t<MyHeader></MyHeader>\n\t<BlogPost id=\"1\"></BlogPost>\n\t<BlogPost id=\"2\"></BlogPost>\n\t<MyFooter>&copy; Hullumullu Inc.</MyFooter>\n</template>",
                message: "One apple a day keeps the doctor away!",
                number: 1336,
            }
        },
    }
</script>
