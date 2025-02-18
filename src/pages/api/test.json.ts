export async function get(context) {
  try {
    // 获取请求的信息
    const { url, headers, method, body } = context.request;
    // 返回一个JSON对象
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Hello from endpoint",
        url,
        headers,
        method,
        body,
      }),
    };
  } catch (error) {
    // 打印错误信息
    console.error(error);
    // 返回一个错误响应
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: "Something went wrong",
        error: error.message,
      }),
    };
  }
}