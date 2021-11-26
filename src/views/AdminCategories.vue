<template>
  <div
    v-show="!isLoading"
    class="container py-5"
  >
    <AdminNav />

    <form class="my-4">
      <div class="row">
        <div class="col-auto">
          <input
            v-model.trim="newCategoryName"
            type="text"
            class="form-control"
            placeholder="新增餐廳類別..."
          >
        </div>
        <div class="col-auto">
          <button
            type="button"
            class="btn btn-primary"
            :disabled="isProcessing"
            @click.stop.prevent="createCategory"
          >
            {{ isProcessing ? '新增中' : '新增' }}
          </button>
        </div>
      </div>
    </form>
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th
            scope="col"
            width="60"
          >
            #
          </th>
          <th scope="col">
            Category Name
          </th>
          <th
            scope="col"
            width="210"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="category in categories"
          :key="category.id"
        >
          <th scope="row">
            {{ category.id }}
          </th>
          <td class="position-relative">
            <div
              v-show="!category.isEditing"
              class="category-name"
            >
              {{ category.name }}
            </div>
            <input
              v-show="category.isEditing"
              v-model="category.name"
              type="text"
              class="form-control"
            >
            <span
              v-show="category.isEditing"
              class="cancel"
              @click="cancelEdit(category.id)"
            >✕</span>
          </td>
          <td class="d-flex justify-content-between">
            <button
              v-show="!category.isEditing"
              type="button"
              class="btn btn-link me-2 text-decoration-none"
              @click.stop.prevent="toggleIsEditing(category.id)"
            >
              Edit
            </button>
            <button
              v-show="category.isEditing"
              type="button"
              class="btn btn-link me-2 text-decoration-none"
              :disabled="category.isProcessing"
              @click.stop.prevent="updateCategory({ categoryId: category.id, name: category.name })"
            >
              Save
            </button>
            <button
              type="button"
              class="btn btn-link me-2 text-decoration-none"
              :disabled="category.isProcessing"
              @click.stop.prevent="deleteCategory(category.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '@/components/AdminNav'
import format from 'date-fns/format'
import adminAPI from '@/apis/admin.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  name: 'AdminCategories',
  components: {
    AdminNav
  },
  data () {
    return {
      categories: [],
      newCategoryName: '',
      isLoading: false,
      isProcessing: false
    }
  },
  created () {
    this.fetchCategories()
  },
  methods: {
    async fetchCategories () {
      try {
        this.isLoading = true
        const { data } = await adminAPI.categories.get()
        this.categories = data.categories.map(category => {
          return {
            ...category,
            isEditing: false,
            nameCached: '',
            isProcessing: false
          }
        })
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法讀取類別資料，請稍後嘗試'
        })
      }
    },
    async createCategory() {
      try {
        if (!this.newCategoryName) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入要新增的餐廳類別'
          })
          return
        }
        
        this.isProcessing = true
        const { data } = await adminAPI.categories.create({ name: this.newCategoryName })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.categories.push({
          id: data.categoryId,
          name: this.newCategoryName,
          createdAt: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
          updatedAt: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
        })
        this.newCategoryName = ''
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: error.message ? error.message : '無法建立新類別，請稍後再試'
        })
      }
    },
    async deleteCategory(categoryId) {
      const category = this.categories.find(category => category.id === categoryId)
      try {
        category.isProcessing = true
        const { data } = await adminAPI.categories.delete({ categoryId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.categories = this.categories.filter(category => category.id !== categoryId)
        Toast.fire({
          icon: 'success',
          title: '成功刪除餐廳類別'
        })
      } catch (error) {
        category.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法刪除餐廳類別，請稍後再試'
        })
      }
    },
    toggleIsEditing (categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            isEditing: !category.isEditing,
            nameCached: category.name
          }
        }
        return category
      })
    },
    async updateCategory({categoryId, name}) {
      const category = this.categories.find(category => category.id === categoryId)
      try {
        category.isProcessing = true
        const { data } = await adminAPI.categories.update({ categoryId, name })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        category.isProcessing = false
        Toast.fire({
          icon: 'success',
          title: '成功更新餐廳名稱類別'
        })
        this.toggleIsEditing(categoryId)
      } catch (error) {
        category.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳類別名稱，請稍後再試'
        })
      }
    },
    cancelEdit(categoryId) {
      this.categories = this.categories.map(category => {
        if (category.id === categoryId) {
          return {
            ...category,
            name: category.nameCached,
          }
        }
        return category
      })
      this.toggleIsEditing(categoryId)
    }
  }
}
</script>

<style scoped>
.category-name {
  padding: 0.375rem 0.75rem;
  border: 1px solid transparent;
  outline: 0;
  cursor: auto;
}

.btn-link {
  width: 62px;
}

.cancel {
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border: 1px solid #aaaaaa;
  border-radius: 50%;
  user-select: none;
  cursor: pointer;
  font-size: 12px;
}
</style>