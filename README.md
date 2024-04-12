# bambooship

1. Authentication and Authorization:

   # Implement a secure authentication system using JWT (JSON Web Tokens). <!-- completed -->

   Đăng nhập lấy Token
   Đưa token vào AuthContext
   Check nêu có token thì isLogin == true: ở file AppNavigator.tsx

   # Create a login screen with email and password fields. <!-- completed -->

   # Upon successful login, retrieve a JWT token from a mock authentication server. <!-- completed -->

   # Use this token to authenticate subsequent requests to a protected API endpoint. <!-- completed -->

   xử lý ở file initApi.ts
   gán token vào header khi call api

2. Advanced UI Development:

   # Implement a custom carousel component to display images fetched from an API. <!-- completed -->

   Em sử dụng thư viện để tạo carousel

   # The carousel should support swiping gestures and smooth transitions between images.<!-- completed -->

   # Each image should be clickable, leading to a detailed view of the image.<!-- completed -->

3. Performance Optimization:

   # Implement lazy loading for images in the carousel component to optimize performance.<!-- completed -->

   sử dụng property windowSize để kiểm soát số lượng ảnh render trên view, đảm bảo vẫn smooth khi số lượng hình ảnh lớn

   # Utilize FlatList or VirtualizedList for rendering large datasets fetched from the API.<!-- completed -->

   Em làm ở Tab Danh sách
   Đang sử dụng data từ https://jsonplaceholder.typicode.com/
   Sử dụng react Query + các property build sẵn ở Flatlist để refresh, loadmore..

   # Ensure that the app remains responsive and performs well, even with a large amount of data.<!-- completed -->

4. Native Module Integration:

   # Integrate a native module for accessing device camera functionality.<!-- completed -->

   Em làm ở UpdateInfo => hiện tại em mới cấu hình đầy đủ để chụp hình ở android

   # Implement a feature to allow users to take a photo within the app.<!-- completed -->

   # Display the captured photo in a preview after taking it.<!-- completed -->

5. Bonus (Optional):

   # Implement dark mode support for the entire app.

   Sử dụng Store hoặc useContext hook để lưu color State tại app => Tuy nhiên em chưa làm kịp

   # Add animation effects for transitions between screens and interactions within the app.

   # Implement caching mechanism to improve app performance by storing API responses locally.<!-- completed -->

   Em cài đặt zustand để quản lý state
   Có sử dụng cho trường hợp nhỏ ở màn hình Danh sách:
   Sau khi data được lấy về => lưu data vào store để có thể sử dụng ở mọi nơi trong app => hạn chế call Api nhiều lần, cải thiện performce app
