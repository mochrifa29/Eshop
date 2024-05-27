<template>
  <div class="container">
    <div class="row">
      <h1>CRUD VUE 3 (FE) & EXPRESS JS (BE)</h1>
    </div>
    <div class="row mt-4">
      <div class="col">
        <h2>Form Tambah Category</h2>
        <form @submit.prevent="onSubmit">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" class="form-control" v-model="category.name" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Description</label
            >
            <input
              type="text"
              class="form-control"
              v-model="category.description"
            />
          </div>
          <button
            type="submit"
            :disabled="category.name == ''"
            :class="isUpdate ? 'btn btn-info' : 'btn btn-primary'"
          >
            {{ isUpdate ? "Update" : "Tambah" }}
          </button>
          <button
            type="button"
            class="btn btn-danger"
            @click="clear()"
            v-if="isUpdate"
          >
            Cancel
          </button>
        </form>
      </div>
      <div class="col">
        <h2>List Category</h2>
        <input type="text" class="form-control" v-model="search" />
        {{ search }}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in categories" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.description }}</td>
              <td>
                <button
                  type="button"
                  @click="deleteCategory(item.id)"
                  class="btn btn-danger mx-2"
                >
                  Hapus
                </button>
                <button
                  type="button"
                  @click="getdataCategory(item)"
                  class="btn btn-warning"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive, computed } from "vue";
import axios from "axios";

const categories = ref([]);
const search = ref(null);
const isUpdate = ref(false);
const url = "http://localhost:3000/api/categories";



const category = reactive({
  nama: "",
  description: "",
  id_category: ""
});

const clear = () => {
  isUpdate.value = false;
  category.name = "";
  category.description = "";
  category.id_category = "";
};

const onSubmit = async () => {
  if (isUpdate.value == false) {
    await axios.post(url + "/store", {
      name: category.name,
      description: category.description,
    });
    alert("Data Berhasil Ditambahkan");
  } else {
    await axios.put(url + "/update/" + category.id_category, {
      name: category.name,
      description: category.description,
    });
    alert("Data Berhasil Diupdate");
  }
  clear();
  getAllCategories();
};

const getAllCategories = async () => {
  try {
    const response = await axios.get(url + "/");
    categories.value = response.data.data;
  } catch (error) {
    console.error(error);
  }
};

const getdataCategory = async (objCategory) => {
  isUpdate.value = true;
  category.name = objCategory.name;
  category.description = objCategory.description;
  category.id_category = objCategory.id;
};

const deleteCategory = async (id) => {
  await axios.delete(url + "/delete/" + id);
  alert("Data Berhasil Dihapus");
  getAllCategories();
};

onMounted(() => {
  getAllCategories();
  
});
</script>
