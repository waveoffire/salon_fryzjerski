<template>
  <div>
    <div class="card card-outline">
      <div class="card-header">
        <h3 class="card-title">Cennik</h3>
      </div>
      <div class="card-body p-3">
        <div class="table-responsive mailbox-messages" style="overflow:hidden">
          <div class="row header">
            <div class="col-4"><b>Usługa</b></div>
            <div class="col-4"><b>Cena</b></div>
            <div class="col-4"><b>Czas trwania</b></div>
          </div>

          <div v-for="(row, index) in data" :key="index" class="row column">
            <div class="col-4">{{ row.name }}</div>
            <div class="col-4">{{ row.price }} zł *</div>
            <div class="col-4">{{ row.time }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      * - Cena jest poglądowa. Zależy od długości włosów oraz zaawansowania
      fryzury.
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        { name: "Balejarz", price: "70/90", time: "zróżnicowany" },
        { name: "Prostowanie", price: "25/30", time: "zróżnicowany" },
        { name: "Modelowanie", price: "20/30", time: "zróżnicowany" },
        {
          name: "Strzyżenie damskie + modelowanie",
          price: "30/40",
          time: "zróżnicowany"
        },
        {
          name: "Czesanie okolicznościowe",
          price: "30/50",
          time: "30 minut i dłużej"
        },
        { name: "Henna na brwi i rzęsy", price: "15", time: "zróżnicowany" },
        { name: "Styling", price: "70/80", time: "zróżnicowany" },
        { name: "Regeneracja włosów", price: "40/50", time: "30 minut" },
        {
          name: "Keratynowe prostowanie włosów",
          price: "250/400",
          time: "zróżnicowany"
        },
        { name: "Farbowanie", price: "60/190", time: "30 minut i dłużej" },
        {
          name: "Strzyżenie męskie nożyczkami (klasyczne)",
          price: "15",
          time: "zróżnicowany"
        },
        {
          name: "Strzyżenie męskie maszynką",
          price: "10",
          time: "zróżnicowany"
        }
      ]
    };
  }
};
</script>

<style scoped>
.card-outline {
  border-top: 3px solid rgb(252, 140, 140);
  margin: 0 15% 0 15%;
  text-align: center;
}
.header {
  border-bottom: 2px solid rgba(0, 0, 0, 0.842);
  padding-bottom: 10px;
}
.column {
  border-bottom: 1px solid rgba(136, 136, 136, 0.842);
  padding: 10px 0 10px 0;
}
.column:hover {
  background-color: rgba(128, 128, 128, 0.1);
}
.bottom {
  margin: 0 15% 0 15%;
}
@media only screen and (max-width: 900px) {
  .card-outline {
    margin: 0;
  }
}
</style>
