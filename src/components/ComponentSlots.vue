<template>
    <div>
        <h1>Component slots</h1>

        <h2>Info</h2>
        <p>You can use slots to "move" HTML content from the parent's template to a specific place in the child component's template.</p>

        <h2>Exercise</h2>
        <div class="card-deck">
            <FancyCard title="One">
                Hi there, {{number}}!
            </FancyCard>
            <FancyCard title="Two"></FancyCard>
            <FancyCard title="Three">
                <template #default>
                    Hi there, {{number}}!
                </template>
                <template #footer>
                    Cheers, {{number}}!
                </template>
            </FancyCard>
        </div>
    </div>
</template>

<script>
    import FancyCard from "./FancyCard"

    export default {
        components: {
            FancyCard,
        },
        data() {
            return {
                number: 1336,
            }
        },
    }
</script>
