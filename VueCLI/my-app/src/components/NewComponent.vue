
<template>
  <div>
    <table class="table table-striped" v-for="array in arrays" :key="array[0].id">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in array" :key="item.id">
          <td>{{ item.nombre }}</td>
          <td>{{ item.apellido }}</td>
          <td>{{ item.telefono }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "NewComponent",
  props: ['datos', 'bgColor'],
  data() {
    return {
      arrays: [
        [
          { nombre: 'John', apellido: 'Doe', telefono: '123456789', id: 1 },
          { nombre: 'Jane', apellido: 'Smith', telefono: '987654321', id: 2 },
          { nombre: 'Mike', apellido: 'Johnson', telefono: '456789123', id: 3 }
        ],
        [
          { nombre: 'Alice', apellido: 'Williams', telefono: '654987321', id: 4 },
          { nombre: 'Bob', apellido: 'Brown', telefono: '321789654', id: 5 },
          { nombre: 'Emma', apellido: 'Davis', telefono: '789123456', id: 6 }
        ],
        [
          { nombre: 'David', apellido: 'Jones', telefono: '147258369', id: 7 },
          { nombre: 'Olivia', apellido: 'Taylor', telefono: '369258147', id: 8 },
          { nombre: 'Liam', apellido: 'Wilson', telefono: '258369147', id: 9 }
        ]
      ],
      
      colors: ["#f2f2f2", "#b8b8b8", "#f2e4ar"]
    };
  }
};
</script>

<style>
    .bgGray {
        margin-top: 10px;
        width: 100%;
        background-color: #b8b8b8;
    }
</style>