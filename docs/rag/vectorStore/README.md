# 介绍

## 向量

### 向量和标量

**向量(Vector)**：是一个有方向和大小的量，常以一组有序的浮点数组来表示，例如：
```py
vector = [0.1, 0.8, -0.3, ..., 0.05]
```

**标量(Scalar)**：是一个只有大小，没有方向的量(例如，温度，质量)。

### 向量的分类

向量按存储内容可分为：
* **数值向量**：包含纯数字。
* **特征向量**：表示对象特征的数值。
* **词向量**：表示词语语义。

### 向量的运算
向量之间可以进行运算：
* 加法：对应的分量相加，例如：`[a1, a2] + [b1, b2] = [a1 + b1, a2 + b2]`。
* 数乘：标量乘以向量的每一个分量，例如：`k * [v1, v2] = [v1 * k, v2 * k]`。
* 点积：两个向量中，对应的每一个分量相乘，最后求和，例如：`[a1, a2] * [b1, b2] = a1 * b1 + a2 * b2`。
* 余弦相似度：求`cos`。
* 欧氏距离：求`d(a,b)`。

```py
import numpy as np

a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
k = 2

# 向量的加法
print(a + b) # 输出[5 7 9]

# 数乘
print(k * a) # 输出[2 4 6]

# 点积
print(np.dot(a, b)) # 输出32

# 余弦相似度
cos_sim = np.dot(a, b) / (np.linalg.norm(a) * np.linalg.norm(b))
print(cos_sim) # 输出0.9746318461970762

# 欧氏距离
euclidean_dist = np.linalg.norm(a - b)
print(euclidean_dist) # 输出5.196152422706632
```
## 向量数据库

**向量数据库(Vector DB)**：是一种专门用于存储、索引和查询向量数据（高维数值数组）的数据库系统。与传统数据库基于精确匹配的查询方式不同，向量数据库通过计算向量之间的相似度来检索数据，这使得它特别适合处理非结构化数据（如图像、文本、音频等）的相似性搜索。


### 核心功能

其核心功能如下：
* **向量操作**：支持向量插入/更新/删除。
* **近似最近邻(ANN)搜索**：在精度和性能之间取得平衡的搜索算法。
* **向量相似性搜索**：基于余弦相似度、欧氏距离或内积等度量方式。
* **索引构建与压缩**：构建如 `HNSW`、`IVF`、`PQ` 等索引结构。
* **高维数据处理**：能够有效处理数百至数千维的数据。
* **与结构化数据关联**：支持元数据存储与联合查询。
* **大规模数据处理**：支持数十亿级别的向量高效检索。

### 主流向量数据库对比
::: tip
[LangChain官方 向量存储方案对比](https://python.langchain.com/docs/integrations/vectorstores/) <br/>
[向量数据库Benchmark对比](https://ann-benchmarks.com/index.html)
:::
| 向量数据库 | 原生向量支持 | 是否开源 | 是否分布式 | 特点/优势 | 缺陷不足 | 典型适用场景 |
| --- | --- | --- | --- | --- | --- | --- |
| **Milvus** | 是 | 是 | 是 | 企业级、分布式、支持亿级数据量 | 资源需求高，部署复杂 | 图像搜索、推荐系统 | 
| **Qdrant** | 是 | 是 | 是 | REST/gRPC、支持过滤、异步搜索 | 较新项目、生态不如 Milvus 全 | 向量+元数据混合过滤 |
| **Weaviate** | 是 | 是 | 是 | GraphQL 接口，支持嵌入生成和元数据联查 | 容器部署稍重 | 语义搜索、问答系统 |  
| **Pinecone** | 是 | 否 | 是 | 商业实现，全托管、免维护、上线快 | 付费、不可私有部署 | 快速开发、MVP、原型验证 | 
| **Faiss** | 是 | 是 | 否 | 高性能 ANN 算法库，支持多种索引，学术界流行 | 无服务层、不分布式 | 离线处理、研究、原型验证 | 
| **Chroma** | 是 | 是 | 否 | 零配置、本地知识库友好 | 不支持 ANN、大数据不适用 | 轻量 RAG、个人项目 | 
| **Redis** | `7.0+`支持 | 是 | 是 | 极低延迟，实时向量搜索 | 内存占用高、不适合超大规模 | 实时推荐、个性化问答 | 
| **MongoDB** | `5.0+`支持 | 是 | 是 | 适合文档+语义联合搜索 | 向量维度限制、功能有限 | 文档搜索、轻量语义搜索 | 
| **PGVector** | 扩展形式 | 是 | 否 | 原生 SQL 接口 | 单机性能有限，写入慢 | 企业集成、轻量向量搜索 | 
| **Elasticsearch** | `8.0+`支持 | 是 | 是 | 全文+向量混合检索 | 向量维度低（768 默认）、性能中等 | 多模态搜索、有 ES 基础场景 | 
