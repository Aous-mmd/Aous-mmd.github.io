<template>
    <div class="home">
        <section class="head_content">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <div class="heading">
                            <h3>اكتب أي نص لإدراجه كعنوان رئيسي</h3>
                            <p>
                                أداة إدخال النصوص هنا يمكنك إضافة أي نص والتحكم
                                بحجمه ونوع الخط فيه
                            </p>
                            <Button> استكشف مأكولاتنا </Button>
                        </div>
                    </div>
                    <div class="col-md-6"></div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import Button from "../components/Buttons/Button";

    export default {
        name: "Home",
        components: {
            Button,
        },
    };
</script>
