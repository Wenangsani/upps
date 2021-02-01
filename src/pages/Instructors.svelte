<script>
  import NavbarGuest from "../component/navbar_guest.svelte";
  import Footer from "../component/footer.svelte";

  let listInstructor = [
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_6f2eaf3b-bd22-477f-b8b7-791b209d8d90.jpg",
      name: "PATRICK BEACH",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_7a35d329-f192-4618-a46b-1f0a46230326.jpg",
      name: "DYLAN WERNER",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_f43c37c1-8169-42e2-be06-b19a07a2733d.jpg",
      name: "BRIOHNY SMYTH",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_2eac4dfd-a10a-4d75-b9ba-216f0fc94d47.jpg",
      name: "ASHLEY GALVIN",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_bf194757-5034-427b-b856-fa39b8042e6d.jpg",
      name: "ADRIENNE KIMBERLEY",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_e899026c-f02d-4a41-8c23-5c391ad1583a.jpg",
      name: "CARLING HARPS",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_25d830f7-1573-48f5-9063-3fb06b530cd4.jpg",
      name: "CALLIE GULLICKSON",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_aace0cd0-fc2f-4dd4-82f5-5eb78ce2cf97.jpg",
      name: "KAYLA NIELSEN",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_334efd36-2eb0-4c0b-ad68-76dff09cb0fd.jpg",
      name: "EMILY SFERRA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_3243b086-d75b-4e53-ab55-df5ad02cb38d.jpg",
      name: "CALEY ALYSSA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_19b5cd1c-9127-409b-aeb1-910c04fe835c.jpg",
      name: "NAYA RAPPAPORT",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_99799f7a-cfa7-4352-9033-58897f7ebe54.jpg",
      name: "CALVIN CORZINE",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_8e31f32a-4517-42a6-a333-2f4a9f82dc25.jpg",
      name: "KOYA WEBB",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_41be31ff-cf09-4108-969a-9c5ed3aa6886.jpg",
      name: "JACKIE STEWART",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_75429235-e41c-40dc-8813-ae3f8c3a5ea0.jpg",
      name: "JACY CUNNINGHAM",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_fa332be3-3fe0-4788-9ac3-fd71432eef44.jpg",
      name: "MACKENZIE MILLER",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_e905c80b-ba0c-483b-b644-a07e9e01c458.jpg",
      name: "JACQUELYN UMOF",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_b3afc5ec-5cda-4eae-9939-fe2855dd94e2.jpg",
      name: "JOSH KRAMER",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_b583f8c1-74cd-4914-b36a-db4c75faa504.jpg",
      name: "TALIA SUTRA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_ba0a9800-79ae-4809-96e9-0139fe289e35.jpg",
      name: "MEGHAN CURRIE",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_e1971834-fe94-4520-a931-1182ae7eb954.jpg",
      name: "JONAH KEST",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_be3d02a2-1d1f-4828-a822-b7f01cf66532.jpg",
      name: "KIRAT RANDHAWA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_a73e7392-ba16-4485-b54b-1d1988940f00.jpg",
      name: "LARUGA GLASER",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_02824936-b44f-4a11-92d3-70e260e0fc50.jpg",
      name: "TELA ANDERSON",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_e4fe9b93-bda2-407c-a993-93b59f15f221.jpg",
      name: "VICTORIA BATHA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_e27a2c6d-559e-4b50-b806-eddce9f15345.jpg",
      name: "PHYLLICIA BONANNO",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_7fca9398-b880-4ad4-bee7-35fc2de4cc43.jpg",
      name: "ANDREA TAYLOR",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_96480b04-2723-4334-b786-4e56aa1a187f.jpg",
      name: "JARED MCCANN",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_49c0d009-0e51-4c07-b689-42b1eff6d61a.jpg",
      name: "MC YOGI",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_f5d60e79-55c5-46f4-ace1-37ebebba3d87.jpg",
      name: "ROXIE JONES",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_59c883e0-bd05-4dc7-810b-db2909299b6c.jpg",
      name: "CLAUDINE LAFOND",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_19580390-948e-4606-ba00-0a1f0832586b.jpg",
      name: "KRISTIN MCGEE",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_0e35b3d5-19d6-4312-bba6-a465267c4e10.jpg",
      name: "ELEONORA ZAMPATTI",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_74aaa6eb-8141-45ee-bf25-fe9138d4b3f5.jpg",
      name: "EOIN FINN",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_9ee154c5-d8fa-4a21-88a1-36d9a2eec86f.jpg",
      name: "SUSY MARKOE SCHIEFFELIN",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_0e464875-06d6-4df8-97ee-e3edd4292f7b.jpg",
      name: "GURMUKH KAUR KHALSA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_1e9a4ed9-aa79-46aa-a114-272075604d09.jpg",
      name: "SRI DHARMA MITTRA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_beb80696-4527-4351-884d-ce0533961e12.jpg",
      name: "MELINI JESUDASON",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_2ba172db-0a55-48c9-a3a8-aef351d9c66c.jpg",
      name: "DJ TOWNSEL",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_74858de3-56d1-4c31-9167-1a171fd176a6.jpg",
      name: "AUBRY MARIE",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_11222233-cad5-48cf-a3da-830ba0e2cde6.jpg",
      name: "MATT STEVENS",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_31fd6a44-0362-4b1b-bde6-3861ed868a3e.jpg",
      name: "SAH D'SIMONE",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_dfd0916e-31d9-4c8b-9244-47acfdbdeabf.jpg",
      name: "HONZA LAFOND",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_12776291-d725-430d-bf03-e6adafa8bca8.jpg",
      name: "DARRELL MICHNOWICZ",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_cbadc866-52a4-4ea3-a28f-722ed8a0d6fa.jpg",
      name: "JADE ALECTRA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_d6c78483-bf22-4237-aa54-8acd114c2d41.jpg",
      name: "AVERY WHITMORE",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_8b2a9ab2-cc58-4ad7-8341-434de38a68ea.jpg",
      name: "CAITLIN TURNER",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_31a64ead-18e7-424a-b9ad-b7a498f08b60.jpg",
      name: "DEEPIKA MEHTA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_3447d765-6e48-4556-904e-fd88dcc79fb6.jpg",
      name: "ANDREW SEALY",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_c5a608e0-296c-44ee-ad8d-d2e41b5bb77e.jpg",
      name: "HIRO LANDAZURI",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_969839e9-ba54-4199-a4ea-345943dfeb8a.jpg",
      name: "ELVIS GARCIA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_79bf97b1-45ef-4424-aa35-f87f79285edd.jpg",
      name: "CARSON CALHOUN",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_64ad2404-9274-4075-baeb-ace1a9e94c5c.jpg",
      name: "ERIN KELLY",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_5497ae24-24c5-4bdb-b5d3-64ce7d2641c4.jpg",
      name: "ABIOLA AKANNI",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_7fd111c8-c8b3-4de4-8d9c-65c24f6a5588.jpg",
      name: "DAVE DURANTE",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_7e1118e4-6e25-40f2-9aec-391395ab48ca.jpg",
      name: "ANA FORREST",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_3a6686cf-af99-4a39-81b3-c3badb784633.jpg",
      name: "STEPH GONGORA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_c242f32d-9114-4ea5-8e27-020029de6bb7.jpg",
      name: "DANIELLE LAPORTE",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_456f5a1a-b72b-4412-9adc-3be3c5f434f1.jpg",
      name: "HANNAH HALLER",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_ed583ba5-4659-4dc0-9a2b-1ed974b6f688.jpg",
      name: "DANIEL SCOTT",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_e2ad36cd-9bf7-4b64-bc26-db0ac0b31381.jpg",
      name: "WAH KHALSA",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_b7443aa0-2eab-4e3b-8788-54a05290161d.jpg",
      name: "NICOLE TSONG",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_d74eebe6-58f3-412e-8cec-fcaddbaddaf2.jpg",
      name: "JANET STONE",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_ea97eaba-04e0-437e-b8a1-7993ba5de823.jpg",
      name: "MARK ROBBERDS",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_6b80b095-ad33-4e4a-9985-a0f6ef8d4ee7.jpg",
      name: "ADELL BRIDGES",
    },
    {
      pict:
        "https://d2lesx9toesny3.cloudfront.net/normal_dea99e67-5df5-48fb-a654-4985c8bbaa6e.jpg",
      name: "FAITH HUNTER",
    }
  ];
</script>

<NavbarGuest />

<div
  class="text-center bg-light"
  style="margin-top:73px;padding-top:70px;padding-bottom:60px"
>
  <h1 class="text-arq">INSTRUCTORS</h1>
</div>

<div class="container-fluid">
  <div class="row p-4">
    {#each listInstructor as { pict, name }}
      <div class="col-2 p-4">
        <img src={pict} alt={name} width="100%" class="img-circle" />
        <h6 class="text-arq text-uppercase mt-3 text-center">
          {name}
        </h6>
      </div>
    {/each}
  </div>
</div>

<Footer />

<style>
  .text-arq {
    font-family: "Arquitecta", Helvetica, Arial, sans-serif;
  }
  .img-circle {
    border-radius: 50%;
  }
</style>
