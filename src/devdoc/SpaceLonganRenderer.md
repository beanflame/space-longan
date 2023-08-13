---
supportvue: true
sidebar: auto
---


# Space Longan Renderer

Space Longan Renderer 是 免费开源的C/C++的图形渲染绘图库（软渲染库），C/C++编译环境的平台中使用支持 Windows端、Linux端、跨平台，但是最终将渲染一个RGBA(32bit)的图形缓存（显存）。

## 构建

```bash
# 新的构建空间龙眼...
git clone https://github.com/space-longan/space-longan-renderer.git
cd space-longan-renderer
cmake . -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release
cmake --build .
cmake --build . --target demo
```

```bash
# 最低版本的构建空间龙眼...
git clone https://github.com/space-longan/space-longan-renderer.git
cd space-longan-renderer
set CC="gcc -m32"
set CXX="g++ -m32"
cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release
cmake --build .
cmake --build . --target demo
```
