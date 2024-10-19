resource "aws_key_pair" "coffeesite" {
  key_name   = "coffeesite"
  public_key = file(var.PATH_TO_PUBLIC_KEY)
}
