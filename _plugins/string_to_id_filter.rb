module StringToIdFilter
  safe true
  priority :low

  def string_to_id(input)
    input
      .to_s                  
      .strip
      .downcase
      .gsub(/[^a-z0-9\s-]/, '')
      .gsub(/\s+/, '-')
      .gsub(/-+/, '-')
      .sub(/^-/, '')
      .sub(/-$/, '')
  end
end

Liquid::Template.register_filter(StringToIdFilter)