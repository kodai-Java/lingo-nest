resource "aws_cloudfront_distribution" "lingo_nest_distribution" {
    aliases = [ "lingo-nest.com" ]
    price_class = "PriceClass_100"
    origin {
        connection_attempts = 3
        connection_timeout = 10
        domain_name = aws_s3_bucket.lingo_nest_bucket.bucket_regional_domain_name
        origin_id = aws_s3_bucket.lingo_nest_bucket.bucket_regional_domain_name
        origin_access_control_id = "E1FFOXWZ9YZ1H3"
    }
    enabled = true
    is_ipv6_enabled = true
    default_root_object = "index.html"
    custom_error_response {
      error_caching_min_ttl = 10
      error_code = 404
      response_code = 404
      response_page_path = "/404/index.html"
    }
    default_cache_behavior {
        allowed_methods = ["GET", "HEAD"]
        target_origin_id = aws_s3_bucket.lingo_nest_bucket.bucket_regional_domain_name
        viewer_protocol_policy = "https-only"
        cached_methods = ["GET", "HEAD"]
        compress = true
        min_ttl = 0
        max_ttl = 0
        default_ttl = 0
        cache_policy_id = "658327ea-f89d-4fab-a63d-7e88639e58f6"
        function_association {
            event_type = "viewer-request"
            function_arn = "${aws_cloudfront_function.add_index_html.arn}"
        }
    }
    viewer_certificate {
        acm_certificate_arn = "arn:aws:acm:us-east-1:975049915902:certificate/2a88c772-5cf6-48f0-ae3c-2322b5795595"
        cloudfront_default_certificate = false
        minimum_protocol_version = "TLSv1.2_2021"
        ssl_support_method = "sni-only"
    }
    restrictions {
        geo_restriction {
            restriction_type = "none"
        }
    }
}

resource "aws_cloudfront_function" "add_index_html" {
  name    = "AddIndexHtml"
  runtime = "cloudfront-js-1.0"

  code = <<EOT
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.includes('.') && !uri.endsWith('/')) {
    request.uri += '/index.html';
  }

  return request;
}
EOT
}