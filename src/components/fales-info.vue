<template>
  <div class="fales">
    <img src="../assets/FALES.png" alt="FALES">
    <p class="about">Фале́с (др.-греч. Θαλῆς ὁ Μιλήσιος, 637/624 — 547/558 до н.э.) — древнегреческий философ и математик из Милета в Малой Азии.</p>
    <p class="quote">Фалес полагает воду как изначально бесформенное начало. Это значит, что она есть некая простая всеобщая сущность, предшествующая всему множеству конечных форм бытия и определяющая чувственную достоверность вещественного мира.</p>
  </div>
</template>

<script>
export default {
  name: 'fales-info',
  props: { }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fales {
  background: linear-gradient(88.22deg, #0D0F0D 56.04%, #437089 115.31%);
  width: 100%;
  height: 200px;
  border-radius: 15px;
  margin: 10px 0;
  display: flex;
  color: #fff;
}

.fales img {
  height: 70%;
  align-self: flex-end;
  margin-left: 20px;
}

.fales .about {
  font-weight: 300;
  font-size: 12px;
  min-width: 180px;
  align-self: flex-end;
  margin-bottom: 20px;
  margin-left: -30px;
}

.fales .quote {
  align-self: center;
  margin: 0 50px 0 35px;
  font-weight: 600;
  font-size: 14px;
}
</style>
